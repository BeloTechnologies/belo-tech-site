function Home() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content">
          <div className="eyebrow-container">
            <div className="profile-circles">
              <div className="profile-circle" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHww&auto=format&fit=crop&w=100&q=80)' }}></div>
              <div className="profile-circle" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHww&auto=format&fit=crop&w=100&q=80)' }}></div>
              <div className="profile-circle" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHww&auto=format&fit=crop&w=100&q=80)' }}></div>
            </div>
            <p className="hero-eyebrow">87 consistent gym users</p>
          </div>
          <h1>Join a community of committed gym users to grow and learn</h1>
          <p className="hero-description">
            Sessions is a gym focused social media app where you can learn new workouts, 
            stay consistent, and flex your gains
          </p>
          <div className="button-group">
            <button className="secondary-button">Learn More</button>
            <button className="cta-button">Install for Free <span className="arrow">→</span></button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
            alt="Hero illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default Home 