mport { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE,
});

export interface Lead {
  id?: number;
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  zipCode: string;
  packageType: string;
  status: 'pending' | 'active' | 'cancelled';
  createdAt?: Date;
  updatedAt?: Date;
}

// Initialize database tables
export async function initializeDatabase() {
  const client = await pool.connect();
  
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(50) NOT NULL,
        brokerage TEXT NOT NULL,
        zip_code VARCHAR(10) NOT NULL,
        package_type VARCHAR(50) NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
      CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
      CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Store a new lead
export async function storeLead(lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) {
  const client = await pool.connect();
  
  try {
    // Initialize database if needed
    await initializeDatabase();
    
    const result = await client.query(
      `INSERT INTO leads (name, email, phone, brokerage, zip_code, package_type, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (email) 
       DO UPDATE SET 
         name = EXCLUDED.name,
         phone = EXCLUDED.phone,
         brokerage = EXCLUDED.brokerage,
         zip_code = EXCLUDED.zip_code,
         package_type = EXCLUDED.package_type,
         status = EXCLUDED.status,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [lead.name, lead.email, lead.phone, lead.brokerage, lead.zipCode, lead.packageType, lead.status]
    );
    
    return result.rows[0];
  } catch (error) {
    console.error('Error storing lead:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Update lead status
export async function updateLeadStatus(email: string, status: Lead['status']) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      `UPDATE leads 
       SET status = $1, updated_at = CURRENT_TIMESTAMP 
       WHERE email = $2 
       RETURNING *`,
      [status, email]
    );
    
    return result.rows[0];
  } catch (error) {
    console.error('Error updating lead status:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Get all leads
export async function getAllLeads() {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT * FROM leads ORDER BY created_at DESC'
    );
    
    return result.rows;
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Get leads by status
export async function getLeadsByStatus(status: Lead['status']) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT * FROM leads WHERE status = $1 ORDER BY created_at DESC',
      [status]
    );
    
    return result.rows;
  } catch (error) {
    console.error('Error fetching leads by status:', error);
    throw error;
  } finally {
    client.release();
  }
}