import React, { useState, useEffect } from 'react';

import Projects from '../Projects/Projects';
import Login from '../Login/Login';
import NewTag from '../NewTag/NewTag';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import NewProject from '../NewProject/NewProject';

import styles from './AdminPanel.module.scss';

import myApi from '../../myApi';
import UnAuthorized from '../UnAuthorized/UnAuthorized';

const AdminPanel = ( props ) => {

    const[isAdmin, setIsAdmin] = useState(false);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[projectDeleteTrigger, setProjectDeleteTrigger] = useState(false);
    const[newTagVisible, setNewTagVisible] = useState(false);
    const[newProjectVisible, setNewProjectVisible] = useState(false);
    const[newTag, setNewTag] = useState("");
    const[newProject, setNewProject] = useState({});
    const[allTags, setAllTags] = useState([]);

    const GetAdminStatus = async() => {
        let response = await myApi.get("/user/AmIAdmin");
        if(response.status == 200) {
            if(response.data.result == true) {
                setIsAdmin(true);
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(true);
                setIsAdmin(false);
            }
        } else {
            setIsAdmin(false);
        }
    }

    const GetAllTags = async() => {
        let response = await myApi.get("/tag");
        if(response.status == 200) {
            setAllTags(response.data);
        }
    }

    const hideNewProject = () => {
        setNewProjectVisible(false);
    }

    const hideNewTag = () => {
        setNewTagVisible(false);
    }
    const newTagPost = (e) => {
        e.preventDefault();
        if(newTag !== "") {
        myApi.post("/tag/", { name: newTag}, (err, response) => {
            if(err) {
                console.log(err);
            }
        }).then(() => {
            GetAllTags();
        });
        hideNewTag();
        }
    }
    
    const newProjectPost = (e) => {
        e.preventDefault();
        myApi.post("/project/", newProject, (err, response) => {
            if(err) {
                console.log(err);
            }
        });
        hideNewProject();
        window.location.reload();
    }

    const tagChangeHandler = (evt) => {
        setNewTag(evt.target.value);
    };

    const projectChangeHandler = (project) => {
        setNewProject(project);
    }

    const setLoggedInTrue = () => {
        setIsLoggedIn(true);
    }

    const deleteProject = async (id) => {
        await myApi.delete("/project/" + id);
        setProjectDeleteTrigger(!projectDeleteTrigger);
        window.location.reload();
    }

    useEffect(() => {
        GetAdminStatus();
        GetAllTags();
    }, [isLoggedIn]);

    if(isAdmin && isLoggedIn) {
        return(
            <div className={styles.AdminPanel}>
                <Backdrop show={newProjectVisible || newTagVisible} clicked={() => {
                    hideNewProject(); hideNewTag();
                }} />
                <NewTag tagChangeHandler={tagChangeHandler} visible={newTagVisible} newTag={newTagPost}/>
                <NewProject allTags={allTags} projectChangeHandler={projectChangeHandler} visible={newProjectVisible} newProject={newProjectPost}/>
                <div className={styles.ActionButtons}>
                    <button onClick={() => {window.location.assign("/")}}>
                        Go back to homepage
                    </button>
                    <button onClick={() => setNewProjectVisible(true)}>
                        Add Project
                    </button>
                    <button onClick={() => setNewTagVisible(true)}>
                        Add Tag
                    </button>
                </div>
                <div>
                    <Projects isAdmin deleteProject={deleteProject}/>
                </div>
            </div>
        );
    } else if(isLoggedIn) {
        return(
            <UnAuthorized/>
        )
    } else {
       return <Login setLoggedInTrue={setLoggedInTrue}/>
    }
}

export default AdminPanel;