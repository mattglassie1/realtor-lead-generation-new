'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, MapPin, TrendingUp } from 'lucide-react';

const packages = [
  {
    id: '20-leads',
    name: '20 Leads',
    price: '$449',
    description: '20 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Email support']
  },
  {
    id: '50-leads',
    name: '50 Leads',
    price: '$699',
    description: '50 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Priority support'],
    popular: true
  },
  {
    id: '100-leads',
    name: '100 Leads',
    price: '$1,299',
    description: '100 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Dedicated support', 'Lead analytics']
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    zipCode: '',
    packageType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.brokerage && formData.zipCode && formData.packageType;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">RealEstate Leads Pro</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Trusted by 1000+ Realtors
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get High-Quality Real Estate Leads
            <span className="text-blue-600"> Delivered Monthly</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop chasing leads. Start closing deals. Our verified leads are delivered directly to your inbox, 
            targeted to your specific zip code with a 15-mile radius.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Verified Contact Info</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">15-Mile Targeting</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-500" />
              <span className="text-gray-700">Monthly Delivery</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Package</h3>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    formData.packageType === pkg.id 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-md'
                  } ${pkg.popular ? 'border-blue-500' : ''}`}
                  onClick={() => handleInputChange('packageType', pkg.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                    {pkg.popular && (
                      <Badge className="w-fit bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Start Getting Leads Today</CardTitle>
                <CardDescription className="text-center">
                  Fill out your information below to get started with your monthly lead subscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brokerage">Brokerage Information *</Label>
                    <Textarea
                      id="brokerage"
                      value={formData.brokerage}
                      onChange={(e) => handleInputChange('brokerage', e.target.value)}
                      placeholder="RE/MAX Premier, License #12345"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Target Zip Code *</Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="90210"
                      maxLength={5}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Leads will be targeted within a 15-mile radius of this zip code
                    </p>
                  </div>

                  {!formData.packageType && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        Please select a package above to continue
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      `Subscribe & Pay ${formData.packageType ? packages.find(p => p.id === formData.packageType)?.price : ''}`
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our terms of service. Cancel anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Realtors Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">1000+ Active Realtors</h4>
              <p className="text-gray-600">Trusted by real estate professionals nationwide</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Verified Leads Only</h4>
              <p className="text-gray-600">Every lead is verified for accuracy and quality</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Proven Results</h4>
              <p className="text-gray-600">Average 15% conversion rate across all clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}