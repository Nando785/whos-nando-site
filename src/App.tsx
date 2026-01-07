import BARTLogo from './assets/BARTLogo.png'
import UCMLogo from './assets/UCMLogo.png'
import STEMLogo from './assets/STEMTutoringLogo.png'
import './App.css'

import JobCard from './components/job-card'

function App() {

  return (
    <>
      <div className="header">
        <div className="header-content">
          <h1>Who's Nando?</h1>
        </div>
      </div>

      <div>
        <JobCard
            imageSrc={BARTLogo}
            title="Full-Stack Development Intern"
            description="Built a full-stack Django application that used TensorFlow and OpenCV to analyze BART track footage and automatically detect infrastructure defects. Designed RESTful APIs connecting a custom-trained CNN to the frontend, delivering a seamless and reliable user experience. Collaborated with a six-person team to prototype a system that improved inspection efficiency and accuracy."
          />

          {/* <JobCard
            imageSrc={STEMLogo}
            title="Computer Science & Engineering Tutor"
            description="Tutored undergraduate computer science students in both lower- and upper-division courses, covering core topics across Python, C, and C++. Specialized in breaking down complex concepts like data structures, memory management, and algorithms into clear, approachable explanations."
          />

          <JobCard
            imageSrc={UCMLogo}
            title="Remidial Tutor I - Group Sessions"
            description="Led weekly live Zoom sessions for incoming students, teaching foundational programming and math concepts through hands-on exercises, algorithm walkthroughs, and live debugging. Developed and delivered Python curriculum with faculty, covering core concepts like loops, conditionals, and functions. Mentored students through individualized feedback while tracking engagement and performance to support data-driven program outcomes."
          /> */}
      </div>
    </>
  )
}

export default App
