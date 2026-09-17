import { Outlet } from 'react-router';

export default function ViewerRoot() {
    return (
        <div>
            Viewer Root Page
            <div>
                <Outlet />
            </div>
        </div>
    );
}