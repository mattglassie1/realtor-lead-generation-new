'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft, Mail } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 rounded-full p-4">
              <XCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-600">
            Your subscription setup was cancelled. No charges were made to your account.
          </p>
        </div>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-center">What happened?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              You cancelled the payment process before completing your subscription. 
              Your information has been saved, and you can try again anytime.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Still interested?</strong> You can return to complete your subscription 
                and start receiving high-quality real estate leads.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = 'mailto:support@realestateleadspro.com'}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                If you experienced any issues during checkout or have questions about our lead packages, 
                our support team is here to help.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
