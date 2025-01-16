import React from "react";
import white_image from "@/public/white_image.jpg"
import msalogo from "@/public/msalogo.png"
export const links = [
    {
        name: "Home",
        hash: '#home',
    },

    {
        name: "About",
        hash: '#about',
    },
    
    {
        name: "Projects",
        hash: '#projects',
    },
    
    {
        name: "Skills",
        hash: '#skills',
    },
    
    {
        name: "Experience",
        hash: '#experience',
    },

    {
        name: "Contact",
        hash: '#contact',
    }    

] as const;

export const projectsData = [
    {
        title: "Group chat System",
        description: "Distributed chat system. It features techniques like Eventual consistency, replication, Vector Timestamps",
        tags: ["Go", "gRPC", "Protocol Buffers", "Bi-directional streaming"],
        imageURL:  white_image
    }

] as const;

export const experienceData = [
    {

        company: "MSA - The Safety Company",
        title: "software Engineering Co-op",
        description : "Spearheaded implementation of server side feature of an internal tool leveraging Web Sockets and Threading mechanism to collect status of connected plugins, reducing connection time by more than 60 seconds. Redesigned client-side functionalities into the backend, enabling efficient and seamless client integration across five distinct projects. Resolved multiple high-priority bugs while working in Agile environment and gained familiarity with DevOps tools.",
        imageURL: msalogo

    }
]

