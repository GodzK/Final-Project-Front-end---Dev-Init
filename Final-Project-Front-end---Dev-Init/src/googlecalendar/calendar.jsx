import React from 'react'
import "./calendar.css"
import Sidebar from '../Sidebar/Sidebar'
function calendar() {
  return (
    <div className='cal'>
      <div>
        <Sidebar/>
      </div>
      <div>
         <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FBangkok&bgcolor=%23ffffff&src=Z29kemsyNUBnbWFpbC5jb20&src=Y2xhc3Nyb29tMTA5NzEwNjQzNzQ3NjMxMzM3MzUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA5OTc0MzEzOTQzNjkzMzI1MzUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4NTg4MzI4MzM1MDc5NDA2OTk2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE4MTM1NjExMDkxMjQ4ODA5NjEwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb202ZDQ5MjA5ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kMGRhODNlMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE3MTUzMzM1NzI5NTQ2NDU0MzE3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwODgxMTQ3NTIwMDIxNTgwMzA2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA0MDc1MDcyOTgzOTYzMjQzODgzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxMzQ5NjYwNjQ2ODIyNzgxODkxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEzMzAyMzY3MTkwMTI5NjUwNjA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxMzMzNDkzNjI4OTQzMTQ2MzIxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4MTMyMDk2Nzc4MzkyMTkwODAwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxNDQ3MjMzMDg4OTg5MTY5NzAzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxMzc1ODI4NTQzMTI0NzAyNjUwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23202124&color=%23137333&color=%230047a8&color=%23b80672&color=%23202124&color=%23174ea6&color=%23174ea6&color=%23137333&color=%23202124&color=%23137333&color=%230047a8&color=%23202124&color=%23137333&color=%23c26401&color=%23007b83" title="Description of the content" className='responsive-iframe' ></iframe>
      </div>
        
    </div>
  )
}

export default calendar