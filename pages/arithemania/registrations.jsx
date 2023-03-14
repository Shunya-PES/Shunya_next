import React from "react";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Registrations() {

    const [memberCount, setMemberCount] = useState(3);

    const memberNumber = [...Array(memberCount).keys()]

    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "",
            srn: "",
            email: "",
            phone: 0,
            semester: 2,
            campus: "RR",
            branch: "CSE",
            gender: "Male",
            guardian_name: 0,
            guardian_phone: null,
            is_hostellite: false,
            hostel_room: ""
        },
        {
            id: 2,
            name: "",
            srn: "",
            email: "",
            phone: 0,
            semester: 2,
            campus: "RR",
            branch: "CSE",
            gender: "Male",
            guardian_name: "",
            guardian_phone: 0,
            is_hostellite: false,
            hostel_room: ""
        },
        {
            id: 3,
            name: "",
            srn: "",
            email: "",
            phone: 0,
            semester: 2,
            campus: "RR",
            branch: "CSE",
            gender: "Male",
            guardian_name: "",
            guardian_phone: 0,
            is_hostellite: false,
            hostel_room: ""
        }
    ])

    const [teamName, setTeamName] = useState("");
    const [domain, setDomain] = useState("Data Science and Intelligent Communication");
    const [problemStatement, setProblemStatement] = useState("");
    const [solution, setSolution] = useState("");

    const addMember = () => {
        setMemberCount(prev => prev+1)
        setTeamMembers(prev => [...prev, {
            id: 4,
            name: "",
            srn: "",
            email: "",
            phone: 0,
            semester: 2,
            campus: "RR",
            branch: "CSE",
            gender: "Male",
            guardian_name: "",
            guardian_phone: 0,
            is_hostellite: false,
            hostel_room: ""
        }])
        console.log(teamMembers)
    }

    const removeMember = () => {
        setMemberCount(prev => prev-1)
        setTeamMembers(prev => prev.slice(0, -1))
        console.log(teamMembers)
    }

    const showToast = (message) => {
        setToastMessage(prev => [...prev, message]);
        setIsToast(true);
        setTimeout(() => {
            setIsToast(false);
        }, 4000)
    }

    const validateData = (e) => {
        e.preventDefault();
        if(teamName.length === 0) {
            toast("Team Name cannot be empty")
            return;
        }
        if(problemStatement.length === 0) {
            toast("Problem Statement cannot be empty")
            return;
        }
        if(solution.length === 0) {
            toast("Solution cannot be empty")
            return;
        }
        teamMembers.map((data, index) => {
            if(data.name.length === 0) {
                toast(`Name Field - ${data.id} empty`)
                return;
            }
            if(data.srn.length === 0 || !data.srn.includes("PES" || "pes") && data.srn.length < 13) {
                toast(`SRN - ${data.id} invalid`)
                return;
            }
            if(!data.email.includes("@") && !data.email.includes(".")) {
                toast(`Email - ${data.id} invalid`)
                return;
            }
            if(data.phone === null || data.phone.length < 10 || data.phone.length > 10) {
                toast(`Phone - ${data.id} invalid`)
                return;
            }
            if(data.semester != 2 || 4 || 6 || 8) {
                toast(`Semester - ${data.id} invalid`)
                return;
            }
            if(data.branch === 0) {
                toast(`Enter Branch - ${data.id}`)
                return;
            }
            if(data.guardian_name === 0) {
                toast(`Guardian Name - ${data.id} empty`)
                return;
            }
            if(data.guardian_phone === null || data.guardian_phone.length < 10 || data.guardian_phone.length > 10) {
                toast(`Gaurdian Phone - ${data.id} invalid`)
                return;
            }
            if(data.is_hostellite) {
                if(data.hostel_room.length === 0) {
                    toast(`Enter Hostel Room - ${data.id}`)
                    return;
                }
            }
        })

        handleSubmit()

    }

    const handleSubmit = () => {
        console.log("hello")
        const addData = () => {
            setDoc(doc(db, "teams", teamName), {
                teamName: teamName,
                domain: domain,
                problemStateMent: problemStatement,
                solution: solution,
                teamMembers: teamMembers
            }).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        }
        addData()
    }

    const handleTextChange = (id, newValue, field) => {
        setTeamMembers((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        [field]: newValue,
                    };
                }
                return item;
            });
            return updatedItems;
        });
    };

    return(
        <div className="min-h-screen flex flex-col w-full items-center bg-background text-center">
            <h1 className="text-white font-bold text-3xl font-mono mt-7 mb-7">Arithmania Registrations</h1>
            <div className="flex flex-col w-[80%] h-auto">
                <form onSubmit={validateData} className="flex flex-col text-left">
                    <label className="flex flex-col font-mono text-white mb-5 font-bold">
                        Team Name
                        <input className="w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </label>

                    <label className="flex flex-col font-mono text-white mb-5 font-bold">
                        Domain
                        <select className="w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => setDomain(e.target.value)}>
                            <option value="Data Science and Intelligent Communication">Data Science and Intelligent Communication</option>
                            <option value="Robotics and Automation">Robotics and Automation</option>
                            <option value="Bigdata Analytics">Bigdata Analytics</option>
                            <option value="Applied Mathematics">Applied Mathematics</option>
                        </select>
                    </label>

                    <label className="flex flex-col font-mono text-white mb-5 font-bold">
                        Problem Statement
                        <input className="w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={problemStatement} onChange={(e) => setProblemStatement(e.target.value)} type="text" />
                    </label>

                    <label className="flex flex-col font-mono text-white mb-5 font-bold">
                        Solution
                        <textarea className="w-full min-h-16 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={solution} onChange={(e) => setSolution(e.target.value)}></textarea>
                    </label>

                    <div className="flex flex-col mt-[30px]">
                        <div className="flex flex-row">
                            <h2 className="text-white font-mono">Team Details</h2>
                            {memberCount === 3 && <button onClick={addMember}>Add Member</button>}
                            {memberCount === 4 && <button onClick={removeMember}>Remove Member</button>}
                        </div>
                        
                        <div className="w-full h-auto flex flex-col md:flex-row">
                            {teamMembers.map((data, index) => {
                                return (
                                    <div key={index} className="flex flex-col">
                                        <label className="flex flex-col font-mono text-white">
                                            Name
                                            <input type="text" value={data.name} onChange={(e) => handleTextChange(data.id, e.target.value, "name")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            SRN
                                            <input type="text" value={data.srn} onChange={(e) => handleTextChange(data.id, e.target.value, "srn")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Email
                                            <input type="email" value={data.email} onChange={(e) => handleTextChange(data.id, e.target.value, "email")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Phone
                                            <input type="number" value={data.phone} onChange={(e) => handleTextChange(data.id, e.target.value, "phone")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Semester
                                            <select onChange={(e) => handleTextChange(data.id, e.target.value, "semester")}>
                                                <option value={2}>2</option>
                                                <option value={4}>4</option>
                                                <option value={6}>6</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Campus
                                            <select onChange={(e) => handleTextChange(data.id, e.target.value, "campus")}>
                                                <option value="RR">RR</option>
                                                <option value="EC">EC</option>
                                                <option value="HN">HN</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Branch
                                            <select onChange={(e) => handleTextChange(data.id, e.target.value, "branch")}>
                                                <option value="CSE">CSE</option>
                                                <option value="ECE">ECE</option>
                                                <option value="EEE">EEE</option>
                                                <option value="Mech">Mech</option>
                                                <option value="BioTech">BioTech</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </label>
                                        {data.branch === "Others" && <input type="text" placeholder="Enter your branch" />}

                                        <label className="flex flex-col font-mono text-white">
                                            Gender
                                            <select onChange={(e) => handleTextChange(data.id, e.target.value, "gender")}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Guardian Name
                                            <input value={data.guardian_name} onChange={(e) => handleTextChange(data.id, e.target.value, "guardian_name")} type="text" />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Guardian Phone Number
                                            <input value={data.guardian_phone} onChange={(e) => handleTextChange(data.id, e.target.value, "guardian_phone")} type="number" />
                                        </label>

                                        <label className="flex flex-col font-mono text-white">
                                            Are you a hostellite?
                                            <select onChange={(e) => handleTextChange(data.id, e.target.value === "No" ? false : true, "is_hostellite")}>
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </label>
                                        {data.is_hostellite && (<label className="flex flex-col">
                                            Hostel Room No
                                            <input value={data.hostel_room} onChange={(e) => handleTextChange(data.id, e.target.value, "hostel_room")} type="text" placeholder="Hostel Room Number" />
                                        </label>)}
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>

                    <button type="submit">Submit</button>

                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                theme="dark"
            />
        </div>
    )
}