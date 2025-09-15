'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your subscription...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to RealEstate Leads Pro!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your subscription is now active. Get ready to receive high-quality leads 
            delivered directly to your inbox every month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>What Happens Next?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lead Generation Begins</h4>
                  <p className="text-sm text-gray-600">We start generating leads in your target area within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Monthly Delivery</h4>
                  <p className="text-sm text-gray-600">Leads are delivered on the same date each month</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Start Converting</h4>
                  <p className="text-sm text-gray-600">Contact your leads and start closing more deals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span>Important Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Confirmation Email Sent</h4>
                <p className="text-sm text-green-700">
                  Check your inbox for a confirmation email with your subscription details and next steps.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Customer Support</h4>
                <p className="text-sm text-blue-700">
                  Questions? Contact our support team at support@realestateleadspro.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Converting?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Quality Leads</h4>
              <p className="text-sm text-gray-600">Verified contact information</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Targeted Area</h4>
              <p className="text-sm text-gray-600">15-mile radius from your zip code</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Monthly Delivery</h4>
              <p className="text-sm text-gray-600">Consistent lead flow</p>
            </div>
          </div>
          
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}