/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const steps = [
  { name: '1', href: '/createAccountP1', status: 'current' },
  { name: '2', href: '/createAccountP2', status: '' },
  { name: '3', href: '/createAccountP3', status: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Steps() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-[#3D897A]" />
                </div>
                <a
                  href="#"
                  className="relative w-8 h-8 flex items-center justify-center bg-[#3D897A] rounded-full"
                >
                  {/* <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" /> */}
                  <span className='text-white'>{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className='relative w-11 h-11 flex items-center justify-center bg-white border-2 bg-[#A0D6D4] rounded-full'>
                  <a
                    href="#"
                    className="relative w-8 h-8 flex items-center justify-center bg-white border-2 bg-[#3D897A] border-[#3D897A] rounded-full"
                    aria-current="step"
                  >
                    <span className='text-white bg-'>{step.name}</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="/createAccountP2"
                  className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                >
                  {/* <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"aria-hidden="true"/> */}
                  <span className='text-[#CDCFDC]'>{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}