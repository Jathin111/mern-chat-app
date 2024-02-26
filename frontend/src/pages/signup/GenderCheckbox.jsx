import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>Male</span>
            <input type="checkbox" defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
        </label>
      </div>
        
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>Female</span>
            <input type="checkbox" defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
