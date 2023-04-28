import React from 'react'

const Form = () => {
  return (
    <form className="p-5 m-5 rounded bg-slate-100">
      <h2 className="text-lg font-bebas mb-3">Find your next munro</h2>
      <div className="flex justify-stretch">
        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          className="form-input rounded w-40" />
        <input
          type="text"
          name="distance"
          placeholder="Distance to travel (kms)"
          className="form-input mx-3 rounded w-50"/>
        <input
          type="submit"
          value="Submit"
          className="bg-emerald-600 p-3 rounded text-white" />
      </div>
    </form>
  )
}

export default Form
