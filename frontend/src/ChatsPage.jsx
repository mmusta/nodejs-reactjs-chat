import { MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return  (
    <div style={{ height:'100vh'}}>
        <PrettyChatWindow
        projectId='2bb728f6-b5f1-467f-bf05-86531e188191'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height:'100%'}}
        />
    </div>
    )
}

export default ChatsPage