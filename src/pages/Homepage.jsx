import React, { useState } from 'react'
import NotificationsContainer from '../components/NotificationsContainer'
import RequestsContatainer from '../components/RequestsContatainer'
import UserDeclarationsContainer from '../components/UserDeclarationsContainer'

const Homepage = () => {
    const [doneRequests, setDoneRequests] = useState(false)
    return (
        <div>

            {doneRequests ? <UserDeclarationsContainer /> : <RequestsContatainer setDoneRequests={setDoneRequests} />}
            {/* <NotificationsContainer /> */}
        </div>
    )
}

export default Homepage
