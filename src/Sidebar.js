import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons"
import React, { useState, useEffect } from "react"
import db from "./firebase"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import { useStateValue } from "./StateProvider"

const Sidebar = () => {

    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    name: doc.data().name
                }
            )))
        ));
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack-Clone</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}

        </div>
    )
}

export default Sidebar
