import { Typography } from "@material-ui/core";

const Skills = ( { title, content } ) => {
    return ( 
        <>
            <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                { title }
            </Typography>
            <Typography variant="subtitle1">
                { content }
            </Typography>
        </>
     );
}
 
export default Skills;