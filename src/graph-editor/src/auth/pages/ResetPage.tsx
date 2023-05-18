import React, { useState } from 'react';

interface ResetPasswordProps {
  initialPassword: string;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ initialPassword }) => {
  const [password, setPassword] = useState(initialPassword);
  const [newPassword, setNewPassword] = useState('');

  const handleReset = () => {
    // Логика для сброса пароля
    // Это место, где вы должны вызвать соответствующий API-эндпоинт или выполнить другие действия
    // для сброса пароля и установки нового
    // Например:
    // api.resetPassword(password, newPassword)
    //   .then(() => {
    //     // Пароль успешно сброшен
    //   })
    //   .catch((error) => {
    //     // Обработка ошибок
    //   });

    setPassword('');
    setNewPassword('');
  };

  return (
    <div>
      <label>
        Старый пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Новый пароль:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleReset}>Сбросить пароль</button>
    </div>
  );
};

export default ResetPassword;

