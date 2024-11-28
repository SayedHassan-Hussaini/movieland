import Image from 'next/image';

import logo from '@/public/img/logo.png';
import LoginForm from "@/components/auth/login/Form";
import Card from '@/components/common/Card';

export default function Login() {
  return (
    <div className="flex h-screen min-h-full w-full items-center justify-center bg-gray-50 px-6 py-12 lg:px-8">
      <div className="xs:11/12 w-full sm:w-1/4">
        <Card>
          <div className="space-y-1">
            <div className='relative'>
              <Image
                src={logo}
                alt="movieland logo"
                width={80}
                height={80}
                className="mx-auto h-16 w-16"
              />
              <h1 className="text-center text-xl font-medium text-gray-900 mt-1">
                <span className="font-extrabold">movieland</span>
              </h1>
            </div>
            <h2 className="text-center text-base font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
