import * as React from 'react'
import { NativeBaseProvider } from 'native-base';

import Index from './index.js'

export default function App() {

  return (
        <NativeBaseProvider>
          <Index />
        </NativeBaseProvider>
  );
}