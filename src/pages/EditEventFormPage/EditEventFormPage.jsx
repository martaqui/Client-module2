import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditEventForm from './../../components/EditEventform/EditEventForm';

const EditEventFormPage = () => {
    const { id } = useParams();

    return (
        <div className="EditEventForm">
            <EditEventForm id={id} />
        </div>
    );
};

export default EditEventFormPage;
