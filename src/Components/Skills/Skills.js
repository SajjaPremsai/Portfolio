import React from 'react'
import "./Skills.css"
import java from "../../assets/Images/java.png"
import python from "../../assets/Images/python.png"
import Card from './Card.js/Card'
import git from "../../assets/Images/git.png"
import Node from "../../assets/Images/node.png"
import Html from "../../assets/Images/html.png"
import Docker from "../../assets/Images/docker.png"
import Kuber from "../../assets/Images/kuber.png"
import react from "../../assets/Images/React.png"
import css from "../../assets/Images/css.png"

export default function Skills() {
    const data = [
        {
            "id": 1,
            "title": "Core Java",
            "path": java
        },
        {
            "id": 2,
            "title": "Python",
            "path": python
        },
        {
            "id": 3,
            "title": "Git",
            "path": git
        }, {
            "id": 4,
            "title": "Node",
            "path": Node
        }, {
            "id": 5,
            "title": "Html",
            "path": Html
        }, 
        {
            "id": 6,
            "title": "CSS",
            "path": css
        },
        {
            "id": 7,
            "title": "React",
            "path": react
        },
        {
            "id": 8,
            "title": "Docker",
            "path": Docker
        }, {
            "id": 9,
            "title": "Kubernetes",
            "path": Kuber
        }
    ]


    return (
        <section className='Skills reveal' id='Skills'>
            <div className='S-Header'>
                <header>Skills</header>
            </div>
            <div className='S-Card'>
                {data.map((item) => {
                    return (
                        <Card item={item} key={item.id} className="CardItem" />
                    )
                })}
            </div>
        </section>
    )
}