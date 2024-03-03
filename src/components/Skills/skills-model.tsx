
import { MDBIcon, MDBCardImage, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

export default function SkillComponent(props: any): React.JSX.Element {
    const { typeIcon, icon, title, gifName } = props.data;

    return (
        <div className='skill-popover-container'>
            {typeIcon === 'fab' 
                ? <MDBIcon fab icon={icon} className='text-color' size='2x'/>
                : <MDBIcon fas icon={icon} className='text-color' size='2x'/>
            }
            <MDBPopover size='lg' id='skills-btn'  btnChildren={title} placement='right'>
                <MDBPopoverHeader className='text-center'> {title}</MDBPopoverHeader>
                <MDBPopoverBody><MDBCardImage className='skills-gif' src={gifName} alt='...'/></MDBPopoverBody>
            </MDBPopover>
        </div>
    )
}