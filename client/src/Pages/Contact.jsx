import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({name:"", email:"", message:""})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({name:"", email:"", message:""})
  }

  return (
    <section className="py-16">
      <h2 className='text-center italic text-4xl font-bold text-white mb-8 tracking-widest'>Contact Us</h2>
      <form  onsubmit={handleSubmit} className='max-w-lg mx-auto bg-black p-8 rounded-lg transition-shadow duration-300 ease-in-out transform hover:scale-110 animate-pulse'>
        <input type="text"  name="name" placeholder="Your Name" className='w-full p-3 mb-3 border rounded-lg' value={formData.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Your Email" className='w-full p-3 mb-3 border rounded-lg'value={formData.email} onChange={handleChange}/>
        <textarea id="message" name="message" placeholder="Your Message" className='w-full p-3 mb-3 border rounded-lg' value={formData.message} onChange={handleChange}/>
        <button type="submit" className=' w-full bg-yellow-200 text-black rounded-xl py-3 hover:bg-yellow-500 transition'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact





// import React, { useState } from 'react';

// const App = () => {
//   const [formValues, setFormValues] = useState({
//     name: '',
//     email: '',
//     age: '',
//     introduction: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     age: '',
//     introduction: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     let isValid = true;

//     // Name validation
//     if (!formValues.name) {
//       formErrors.name = 'Name is required!';
//       isValid = false;
//     }

//     // Email validation
//     if (!formValues.email) {
//       formErrors.email = 'Email is required!';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       formErrors.email = 'Email is not valid!';
//       isValid = false;
//     }

//     // Age validation
//     if (formValues.age && (isNaN(formValues.age) || formValues.age < 0 || formValues.age > 99)) {
//       formErrors.age = 'Age must be between 0 and 99';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log(formValues);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
//       {/* Name Field */}
//       <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="name" style={{ display: 'block' }}>Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formValues.name}
//           onChange={handleInputChange}
//           style={{ width: '100%', padding: '0.5rem' }}
//         />
//         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
//       </div>

//       {/* Email Field */}
//       <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="email" style={{ display: 'block' }}>Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formValues.email}
//           onChange={handleInputChange}
//           style={{ width: '100%', padding: '0.5rem' }}
//         />
//         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//       </div>

//       {/* Age Field */}
//       <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="age" style={{ display: 'block' }}>Age</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formValues.age}
//           onChange={handleInputChange}
//           style={{ width: '100%', padding: '0.5rem' }}
//         />
//         {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
//       </div>

//       {/* Introduction Field */}
//       <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="introduction" style={{ display: 'block' }}>Introduction</label>
//         <textarea
//           id="introduction"
//           name="introduction"
//           value={formValues.introduction}
//           onChange={handleInputChange}
//           style={{ width: '100%', padding: '0.5rem', height: '100px' }}
//         />
//       </div>

//       {/* Submit Button */}
//       <div>
//         <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: 'blue', color: 'white' }}>
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default App;
