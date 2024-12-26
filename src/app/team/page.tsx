"use client";

import Card from "@/Components/team/Card";
import data from "@/data/teamData";




export default function Teams() {

    const clubLead = data['clubLead'];
    const clubCoLead = data['clubCoLead'];
    const teams = data['teams']
    
   

    return (
        <div>

            <div className="flex flex-row gap-2">
                <div className="header"><span className="samkaran">OUR</span>T<span className="samkaran">EAM</span></div>
            </div>

            <div className="row">
                <Card
                    name={clubLead.name}
                    position={clubLead.position}
                    imageUrl={clubLead.imageUrl}
                    insta={clubLead.insta}
                    linkedIn={clubLead.linkedIn}
                    github={clubLead.github}

                />
                <Card
                    name={clubCoLead.name}
                    position={clubCoLead.position}
                    imageUrl={clubCoLead.imageUrl}
                    insta={clubCoLead.insta}
                    linkedIn={clubCoLead.linkedIn}
                    github={clubCoLead.github}

                />
            </div>

            {
                teams.map((team:typeof data.teams[0] , teamindex :number ) => {
                    return (
                         
                          
                            <section className="m-4" key={teamindex}>
                                <div  className="w-screen  h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"/>
          
                                <h1 className="w-full header">{team.name.substring(0, 1)}<span className=" samkaran">{team.name.substring(1)}</span> </h1>
                                <div className="top-row flex">
                                    <Card 
                                        name= {team.lead.name} 
                                        position = {team.lead.position} 
                                        imageUrl = {team.lead.imageUrl} 
                                        insta = {team.lead.insta} 
                                        linkedIn = {team.lead.linkedIn}
                                        github = {team.lead.github} 

                                    />
                                </div>
                                <div className="row">
                                    {(team.members).map(
                                        (member : typeof team.members[0], index:number) => {
                                            return (
                                                <Card key={teamindex*1000+index}  
                                                    name = {member.name}
                                                    position = {member.position}
                                                    imageUrl = {member.imageUrl}
                                                    insta = {member.insta}
                                                    linkedIn = {member.linkedIn}
                                                    github = {member.github}
                                                />
                                            )
                                        }
                                    )}
                                </div>
                            </section>
                        
                            )
                    }
                )
            }
        </div>
    )
}