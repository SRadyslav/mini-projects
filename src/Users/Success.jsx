import React from 'react';
import success from '../assets/success.svg'

export const Success = ({ count, onBack }) => {
    return (
        <div className="success-block">
            <img src={success} />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={onBack} className="send-invite-btn">Назад</button>
        </div>
    );
};