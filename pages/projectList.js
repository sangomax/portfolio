import { Grid } from "@material-ui/core";
import ProjectContainerainer from '../comp/ProjectContainer'


const ProjectList = ( { data } ) => {
    return ( 
        <>
            { data.map( (project) => (
                <Grid item xs={12} sm={6} key={project.id} >
                    <ProjectContainerainer projectDta={ project }  />
                </Grid>
            ))}
        </>
     );
}
 
export default ProjectList;