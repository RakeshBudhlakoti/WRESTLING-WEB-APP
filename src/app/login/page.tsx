import Link from "next/link";

export default function Login() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md bg-surface border-x border-gray-100 p-8 md:p-12 space-y-8 min-h-screen md:min-h-0 md:rounded-3xl flex flex-col justify-center">
        
        <div className="text-center mb-8">
          <div className="text-4xl font-black text-brand-yellow tracking-tighter mb-8">NLA</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h1>
          <p className="text-muted text-sm">Enter your credentials to access your NLA profile.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
            <input 
              type="email" 
              defaultValue="athlete@nla.com"
              className="w-full px-4 py-3 bg-surface-hover border border-gray-100 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
              placeholder="coach@nlawrestling.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
            <input 
              type="password" 
              defaultValue="password123"
              className="w-full px-4 py-3 bg-surface-hover border border-gray-100 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-brand-yellow text-sm font-bold hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <button className="w-full py-3.5 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors mt-4">
            Sign In
          </button>
        </form>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs font-bold tracking-wider">
            <span className="px-4 bg-surface text-muted uppercase">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 bg-surface-hover rounded-xl hover:bg-zinc-800 transition-colors font-bold text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-surface-hover rounded-xl hover:bg-zinc-800 transition-colors font-bold text-gray-900">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-muted mt-8">
          New to NLA Wrestling?{" "}
          <Link href="/register" className="font-bold text-brand-yellow hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
