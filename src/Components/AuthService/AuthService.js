import axios from 'axios';

export async function loginAdmin(username, password) {
  try {
    const response = await axios.post('https://fun2fun.live/admin/super-admin/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      localStorage.setItem('MasterAdmintoken', data.data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}
export async function loginAdmin(username, password) {
  try {
    const response = await axios.post('https://fun2fun.live/admin/adminUser/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      localStorage.setItem('Admintoken', data.data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}
export async function loginSubAdmin(username, password) {
  try {
    const response = await axios.post('https://fun2fun.live/admin/subadminuser/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      localStorage.setItem('SubAdmintoken', data.data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}
export async function loginSubAdmin(username, password) {
  try {
    const response = await axios.post('https://fun2fun.live/admin/securityuser/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      localStorage.setItem('Securitytoken', data.data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}


