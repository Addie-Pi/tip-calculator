import React, { cloneElement } from 'react'
import { Icon } from './components'
import clsx from 'clsx'

function Card({ children }) {
  return <div className="bg-white rounded-3xl p-8">{children}</div>
}

function TestFiled({ id, label }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="{id}" className="text-cyan-label font-bold">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type="number"
          id="{id}"
          name="{id}"
          className={clsx(
            'w-full bg-cyan-text-field p-2',
            'text-right text-cyan-text font-bold text-2xl',
            'outline-none focus:ring ring-cyan-focus '
          )}
        />

        {/* clonelement 
            -> 除了可以複製元件還以可丟入 prop    
        */}
        <Icon.Dollar className="absolute w-4 m-2 " />
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <header className="flex justify-center my-12 ">
        <h1 className="w-24 text-cyan-darkest">
          <Icon.Logo />
        </h1>
      </header>
      <main>
        <Card>
          {/* Bill */}
          <TestFiled id="bill" label="Bill" />
          {/* Select Tip */}
          {/* Number of People */}
          {/* Present */}
        </Card>
      </main>
    </div>
  )
}

export default App
