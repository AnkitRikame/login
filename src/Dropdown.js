import React,{useState} from 'react';
import Select from "react-select";
// import Navbar from "./Navbar";
import './index.css';

function Dropdown() {

    const dropdown_list = [
        {
            value:1,
            label:"Lorem 1",
            description : `Lorem1 Content Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
             value:2,
             label:"Lorem 2",
             description:`Lorem2 Content Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

               Lorem2 Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               Lorem2 Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               Lorem2 Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               Lorem2 Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

               Lorem2 Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               `
         },
         {
             value:3,
             label:"Lorem 3",
             description : `Lorem3 Content Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                   desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                   release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                     release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                      desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                       desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
         },
         {
            value:4,
            label:"Lorem 4",
            description : `Lorem4 Content Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              
              Lorem4 Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                
                It was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                 
                 It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  
                  It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
         },
         {
            value:5,
            label:"Lorem 5",
            description : `Lorem5 Content
            Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               
               It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                
                It was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                 
                 It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  
                  It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
        },
        {
            value:6,
            label:"Lorem 6" ,
            description : `
            Lorem6  Content Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley
             of type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 


              It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
               
               It was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                
                It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              
              It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
               desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
               
               It was popularised in the 1960s with the 
               release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                
                It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `
        },
    ];

    const [SelVal,setSelVal] = useState("");
    const [description,setDescription] = useState("")
    const handleChange = obj =>{
        console.log(obj.description);
        // setSelVal(obj.label);
        setDescription(obj.description)
    }
    
    // if required ....... name or label
    // getOptionLabel={option => option.varName}
    return (
        <>
      
        <div className="app">
            <Select 
            style={{margin: "10px 0px"}}
            value={dropdown_list.find(x => x.value === SelVal)}
            options = {dropdown_list} 
            value={SelVal}
            onChange={handleChange} /> 
            <br/>

            {/* <b>Selected Value :</b> */}
            
            <pre>{SelVal}</pre>
            {description}
        </div>
    </>
    );
};

export default Dropdown;
