import { useState, useMemo } from 'react'
import UseMemoExample from './useMemoExample';
import UseCallbackExample from './useCallbackExample';
import './App.css'

export default function App() {
  // return (
  //   <div>
  //     <UseCallbackExample />
  //   </div>
  // );

  return (
    <div>
      <UseMemoExample />
    </div>
  );
}
