import React, { useState } from 'react'
import LoginScreen from './components/LoginScreen'
import SignUpScreen from './components/SignUpScreen'

type ScreenType = 'login' | 'signup'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login')

  const switchToSignUp = () => setCurrentScreen('signup')
  const switchToLogin = () => setCurrentScreen('login')

  return (
    <>
      {currentScreen === 'login' ? (
        <LoginScreen onSignUpClick={switchToSignUp} />
      ) : (
        <SignUpScreen onSignInClick={switchToLogin} />
      )}
    </>
  )
}
