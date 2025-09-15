import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: parseInt(process.env.PGPORT || '5432'),
});

export interface RealtorLead {
  id: number;
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  zip_code: string;
  package_type: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  created_at: Date;
}

export async function initializeDatabase() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS realtor_leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(50) NOT NULL,
        brokerage VARCHAR(255) NOT NULL,
        zip_code VARCHAR(10) NOT NULL,
        package_type VARCHAR(50) NOT NULL,
        stripe_customer_id VARCHAR(255),
        stripe_subscription_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } finally {
    client.release();
  }
}

export async function createRealtorLead(lead: Omit<RealtorLead, 'id' | 'created_at'>) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO realtor_leads (name, email, phone, brokerage, zip_code, package_type, stripe_customer_id, stripe_subscription_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [lead.name, lead.email, lead.phone, lead.brokerage, lead.zip_code, lead.package_type, lead.stripe_customer_id, lead.stripe_subscription_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function updateRealtorLead(id: number, updates: Partial<RealtorLead>) {
  const client = await pool.connect();
  try {
    const setClause = Object.keys(updates)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');
    
    const values = [id, ...Object.values(updates)];
    
    const result = await client.query(
      `UPDATE realtor_leads SET ${setClause} WHERE id = $1 RETURNING *`,
      values
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function getRealtorLeadByEmail(email: string) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM realtor_leads WHERE email = $1',
      [email]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

export default pool;
