import { Content } from "./styles"
import { ImFilesEmpty } from 'react-icons/im';

export const EmptyPost = () => {
    return (
        <Content>
            <p>Sorry, there are currently no posts recorded.</p>
            <ImFilesEmpty />
        </Content>
    )
}