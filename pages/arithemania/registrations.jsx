import React from "react";
import { useState, useEffect } from "react";
import { collection, addDoc, getDoc, getDocs, doc, setDoc, onSnapshot } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Registrations() {

    const [memberCount, setMemberCount] = useState(3);

    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "",
            srn: "",
            email: "",
            phone: "",
            semester: 2,
            campus: "RR",
            branch: "CSE",
            other_branch: "",
            gender: "Male",
            guardian_name: "",
            guardian_phone: "",
            is_hostellite: false,
            hostel_room: ""
        },
        {
            id: 2,
            name: "",
            srn: "",
            email: "",
            phone: "",
            semester: 2,
            campus: "RR",
            branch: "CSE",
            other_branch: "",
            gender: "Male",
            guardian_name: "",
            guardian_phone: "",
            is_hostellite: false,
            hostel_room: ""
        },
        {
            id: 3,
            name: "",
            srn: "",
            email: "",
            phone: "",
            semester: 2,
            campus: "RR",
            branch: "CSE",
            other_branch: "",
            gender: "Male",
            guardian_name: "",
            guardian_phone: "",
            is_hostellite: false,
            hostel_room: ""
        }
    ])

    const [teamName, setTeamName] = useState("");
    const [domain, setDomain] = useState("Data Science and Intelligent Communication");
    const [problemStatement, setProblemStatement] = useState("");
    const [solution, setSolution] = useState("");

    const [registeredTeams, setRegisteredTeams] = useState([]);

    const [loading, setLoading] = useState(false);

    const addMember = () => {
        setMemberCount(prev => prev+1)
        setTeamMembers(prev => [...prev, {
            id: 4,
            name: "",
            srn: "",
            email: "",
            phone: "",
            semester: 2,
            campus: "RR",
            branch: "CSE",
            other_branch: "",
            gender: "Male",
            guardian_name: "",
            guardian_phone: "",
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

    const validateData = (e) => {
        e.preventDefault();
        for (let i = 0; i < registeredTeams.length; i++) {
            const team = registeredTeams[i];
            if(team === teamName) {
                toast("Team Name already taken")
                return;
            }
        }

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
        for (let i = 0; i < teamMembers.length; i++) {
            const member = teamMembers[i];
            if(member.name.length === 0) {
                toast(`Name Field - ${member.id} empty`)
                return;
            }
            if(member.srn.length === 0 || !member.srn.includes("PES" || "pes") || member.srn.length < 13) {
                toast(`SRN - ${member.id} invalid`)
                return;
            }
            if(!member.email.includes("@") && !member.email.includes(".")) {
                toast(`Email - ${member.id} invalid`)
                return;
            }
            if(member.phone === "" || member.phone.toString().length < 10 || member.phone.toString().length > 10) {
                toast(`Phone - ${member.id} invalid`)
                return;
            }
            if(member.branch === "Others") {
                if(member.other_branch.length === 0) {
                    toast(`Branch Name - ${member.id} empty`)
                }
            }
            if(member.guardian_name.length === 0) {
                toast(`Guardian Name - ${member.id} empty`)
                return;
            }
            if(member.guardian_phone === "" || member.guardian_phone.toString().length < 10 || member.guardian_phone.toString().length > 10) {
                toast(`Gaurdian Phone - ${member.id} invalid`)
                return;
            }
            if(member.is_hostellite) {
                if(member.hostel_room.length === 0) {
                    toast(`Enter Hostel Room - ${member.id}`)
                    return;
                }
            }
        }

        handleSubmit()

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

    const handleSubmit = async () => {
        const resetData = () => {
            return new Promise(() => {
                setMemberCount(3);
                setTeamName("");
                setProblemStatement("");
                setSolution("");
                setTeamMembers([
                    {
                        id: 1,
                        name: "",
                        srn: "",
                        email: "",
                        phone: "",
                        semester: 2,
                        campus: "RR",
                        branch: "CSE",
                        other_branch: "",
                        gender: "Male",
                        guardian_name: "",
                        guardian_phone: "",
                        is_hostellite: false,
                        hostel_room: ""
                    },
                    {
                        id: 2,
                        name: "",
                        srn: "",
                        email: "",
                        phone: "",
                        semester: 2,
                        campus: "RR",
                        branch: "CSE",
                        other_branch: "",
                        gender: "Male",
                        guardian_name: "",
                        guardian_phone: "",
                        is_hostellite: false,
                        hostel_room: ""
                    },
                    {
                        id: 3,
                        name: "",
                        srn: "",
                        email: "",
                        phone: "",
                        semester: 2,
                        campus: "RR",
                        branch: "CSE",
                        other_branch: "",
                        gender: "Male",
                        guardian_name: "",
                        guardian_phone: "",
                        is_hostellite: false,
                        hostel_room: ""
                    }
                ])
                setRegisteredTeams([]);
            })
        }

        const submitData = async () => {
            try {
                await setDoc(doc(db, "teams", teamName), {
                    teamName: teamName,
                    domain: domain,
                    problemStateMent: problemStatement,
                    solution: solution,
                    teamMembers: teamMembers 
                })
                await resetData();
            } catch (err) {
                toast("There seems to be a problem submitting your response.")
            }
        }
        submitData();
    }

    useEffect(() => {
        const getRegisteredTeams = async () => {
            const querySnapshot = await getDocs(collection(db, 'teams'));
            querySnapshot.forEach(doc => {
                setRegisteredTeams(prev => [...prev, doc.id])
            })
        }
        getRegisteredTeams();
    }, [])
    
    return(
        <div className="min-h-screen flex flex-col w-full items-center bg-background text-center">
            <h1 className="text-white font-bold text-3xl font-mono mt-7 mb-7">Arithemania Registrations</h1>
            <div className="flex flex-col w-[80%] h-auto">
                <form onSubmit={validateData} className="flex flex-col text-left items-center w-full">
                    <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                        Team Name
                        <input className="text-base w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white focus:outline-none" type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </label>

                    <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                        Domain
                        <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => setDomain(e.target.value)}>
                            <option value="Data Science and Intelligent Communication">Data Science and Intelligent Communication</option>
                            <option value="Robotics and Automation">Robotics and Automation</option>
                            <option value="Bigdata Analytics">Bigdata Analytics</option>
                            <option value="Applied Mathematics">Applied Mathematics</option>
                        </select>
                    </label>

                    <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                        Problem Statement
                        <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={problemStatement} onChange={(e) => setProblemStatement(e.target.value)} type="text" />
                    </label>

                    <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                        Solution
                        <textarea className="text-base focus:outline-none w-full min-h-32 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={solution} onChange={(e) => setSolution(e.target.value)}></textarea>
                    </label>

                    <div className="flex flex-col mt-[30px] w-full">
                        <div className="flex flex-row items-center justify-between mb-[20px]">
                            <h2 className="text-2xl font-bold text-white font-mono text">Team Details</h2>
                            {memberCount === 3 && <button className="text-white font-mono font-bold text-base border-2 border-white rounded p-[3px] cursor-pointer" onClick={addMember}>Add Member</button>}
                            {memberCount === 4 && <button className="text-white font-mono font-bold text-base border-2 border-white rounded p-[3px] cursor-pointer" onClick={removeMember}>Remove Member</button>}
                        </div>
                        
                        <div className="w-full h-auto flex flex-col gap-8 md:flex-row">
                            {teamMembers.map((data, index) => {
                                return (
                                    <div key={index} className="flex flex-col">
                                        <span className="text-lg text-white font-bold font-mono mb-[10px]">Member {data.id}:</span>
                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Name
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" type="text" value={data.name} onChange={(e) => handleTextChange(data.id, e.target.value, "name")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            SRN
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" type="text" value={data.srn} onChange={(e) => handleTextChange(data.id, e.target.value, "srn")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Email
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" type="email" value={data.email} onChange={(e) => handleTextChange(data.id, e.target.value, "email")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Phone
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" type="number" value={data.phone} onChange={(e) => handleTextChange(data.id, e.target.value, "phone")} />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Semester
                                            <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => handleTextChange(data.id, e.target.value, "semester")}>
                                                <option value={2}>2</option>
                                                <option value={4}>4</option>
                                                <option value={6}>6</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Campus
                                            <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => handleTextChange(data.id, e.target.value, "campus")}>
                                                <option value="RR">RR</option>
                                                <option value="EC">EC</option>
                                                <option value="HN">HN</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Branch
                                            <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => handleTextChange(data.id, e.target.value, "branch")}>
                                                <option value="CSE">CSE</option>
                                                <option value="ECE">ECE</option>
                                                <option value="EEE">EEE</option>
                                                <option value="Mech">Mech</option>
                                                <option value="BioTech">BioTech</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </label>
                                        {data.branch === "Others" && (<label className="flex flex-col mb-6 font-bold text-white font-mono">
                                            Branch Name
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={data.other_branch} onChange={(e) => handleTextChange(data.id, e.target.value, "other_branch")} type="text"/>
                                        </label>)}

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Gender
                                            <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => handleTextChange(data.id, e.target.value, "gender")}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Guardian Name
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={data.guardian_name} onChange={(e) => handleTextChange(data.id, e.target.value, "guardian_name")} type="text" />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Guardian Phone Number
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={data.guardian_phone} onChange={(e) => handleTextChange(data.id, e.target.value, "guardian_phone")} type="number" />
                                        </label>

                                        <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                            Are you a hostellite?
                                            <select className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" onChange={(e) => handleTextChange(data.id, e.target.value === "No" ? false : true, "is_hostellite")}>
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </label>
                                        {data.is_hostellite && (<label className="flex flex-col mb-6 font-bold text-white font-mono">
                                            Hostel Room No
                                            <input className="text-base focus:outline-none w-full h-8 rounded mt-2 pl-2 pr-2 text-white font-mono font-normal bg-inherit border-2 border-white" value={data.hostel_room} onChange={(e) => handleTextChange(data.id, e.target.value, "hostel_room")} type="text"/>
                                        </label>)}
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>

                    <button className="text-white border-2 p-[5px] rounded bg-inherit w-[50%] mb-[30px] mt-[30px]" type="submit">{loading ? ("Submitting...") : ("Submit")}</button>

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