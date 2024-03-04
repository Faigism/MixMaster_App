const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="Faiq"
        />
      </div>
      {/* lastname */}
      <div className="form-row">
        <label htmlFor="lastname" className="form-label">
          lastname
        </label>
        <input
          type="text"
          className="form-input"
          name="lastname"
          id="lastname"
          defaultValue="Ismayilov"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="faiq@gmail.com"
        />
      </div>
    </form>
  )
}
export default Newsletter
