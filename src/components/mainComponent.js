import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser, editUser, setEditUser, clearEditUser } from '../actions/userActions';
import { Table, Input, Button, Modal } from 'antd';

const { Column } = Table;

const MainComponent = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleAddUser = () => {
        if (name.trim() !== '' && validateEmail(email.trim())) {
            props.addUser({ id: props.users.length + 1, name, email });
            setName('');
            setEmail('');
        } else {
            alert('Please enter a valid name and email');
        }
    };

    const handleEditUser = (user) => {
        props.setEditUser(user);
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        if (props.editingUser.name.trim() !== '' && validateEmail(props.editingUser.email.trim())) {
            props.editUser(props.editingUser);
            setIsEditing(false);
            props.clearEditUser();
        } else {
            alert('Please enter a valid name and email');
        }
    };

    const handleDeleteUser = (userId) => {
        setIsConfirmVisible(true);
        setUserToDelete(userId);
    };

    const confirmDelete = () => {
        props.deleteUser(userToDelete);
        setIsConfirmVisible(false);
        setUserToDelete(null);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="main-component">
            <h2>Add User</h2>
            <div className="form-group">
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="primary" onClick={handleAddUser}>Add User</Button>
            </div>

            <h2>User List</h2>
            <Table dataSource={props.users} rowKey="id">
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <>
                            <Button type="primary" onClick={() => handleEditUser(record)}>
                                Edit
                            </Button>
                            <Button type="danger" onClick={() => handleDeleteUser(record.id)}>
                                Delete
                            </Button>
                        </>
                    )}
                />
            </Table>

            <Modal
                title="Edit User"
                visible={isEditing}
                onOk={handleSaveEdit}
                onCancel={() => setIsEditing(false)}
            >
                <Input
                    type="text"
                    placeholder="Name"
                    value={props.editingUser ? props.editingUser.name : ''}
                    onChange={(e) => props.setEditUser({ ...props.editingUser, name: e.target.value })}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={props.editingUser ? props.editingUser.email : ''}
                    onChange={(e) => props.setEditUser({ ...props.editingUser, email: e.target.value })}
                />
            </Modal>

            <Modal
                title="Confirm Delete"
                visible={isConfirmVisible}
                onOk={confirmDelete}
                onCancel={() => setIsConfirmVisible(false)}
            >
                <p>Are you sure you want to delete this user?</p>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users.users,
    editingUser: state.editUser.editingUser,
});

const mapDispatchToProps = {
    addUser,
    deleteUser,
    editUser,
    setEditUser,
    clearEditUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
