import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { useSelector } from "react-redux";

const initialState = {
  staffData: [],
  staffCreationData: [],
  adminData: [],
  residentData: [],
  queueData: [],
  isStaffChecked: false,
  isVerified: false,
  isLoggedInStaff: false,
  isLoggedInAdmin: false,
  isQueueAdded: false,
  loginLoading: false,
  registerLoading: false,
  queueNo: "",
  completedIssueVoucher: "",
  isCompleted: false,
  isRegisterCreated: false,
};

const name = "appState";

export const register = createAsyncThunk(
  `${name}/register`,
  async ({ username, password, fullName, email }) => {
    try {
      const res = await axios.post("/register", {
        username,
        password,
        fullName,
        email,
      });

      if (res.status !== 200) {
        alert("Register failed here.");
        return;
      }

      alert("Register successful");
    } catch (err) {
      alert("Register failed 2.");
    }
  }
);

//login Staff
export const login = createAsyncThunk(
  `${name}/login`,
  async ({ username, password }) => {
    try {
      const res = await axios.post("/login", {
        username,
        password,
      });

      if (res.status !== 200) {
        alert("Login failed here.");
        return;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("Login failed");
    }
  }
);

//login admin
export const loginAdmin = createAsyncThunk(
  `${name}/loginAdmin`,
  async ({ username, password }) => {
    try {
      const res = await axios.post("/loginAdmin", {
        username,
        password,
      });

      if (res.status !== 200) {
        alert("Login failed here.");
        return;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("Login failed");
    }
  }
);

//Staff verify queue no and resident, checks if queue exist
export const staffVerifyQueue = createAsyncThunk(
  `${name}/staffVerifyQueue`,
  async ({ queueNo, uinfin, mobileNo }) => {
    try {
      const res = await axios.post("/staffVerifyQueue", {
        queueNo,
        uinfin,
        mobileNo,
      });

      if (res.status !== 200) {
        alert("Error verifying queue and resident.");
        return false;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("Queue and resident data don't exist.");
      return false;
    }
  }
);

//verify resident
export const verifyResident = createAsyncThunk(
  `${name}/verifyResident`,
  async ({ uinfin, mobileNo }) => {
    try {
      const res = await axios.post("/verifyResident", {
        uinfin,
        mobileNo,
      });

      if (res.status !== 200) {
        alert("Verification error here.");
        return false;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("Verification error");
      return false;
    }
  }
);

//issue voucher for resident
export const issueVoucher = createAsyncThunk(
  `${name}/issueVoucher`,
  async ({ queueNo, uinfin, mobileNo, staffFullName }) => {
    try {
      const res = await axios.post("/issueVoucher", {
        queueNo,
        uinfin,
        mobileNo,
        staffFullName,
      });

      if (res.status !== 200) {
        alert("Issue voucher failed.");
        return;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("An error has occured. Please try again.");
    }
  }
);

//addQueue for resident
export const addQueue = createAsyncThunk(
  `${name}/addqueue`,
  async ({ uinfin, mobileNo }) => {
    try {
      const res = await axios.post("/addQueue", {
        uinfin,
        mobileNo,
      });

      if (res.status !== 200) {
        alert("Add Queue failed here.");
        return;
      }

      const data = res.data.data;

      alert(res.data.message);

      return data;
    } catch (err) {
      alert("Add Queue failed");
    }
  }
);

const appSlice = createSlice({
  name,
  initialState,
  reducers: {
    logOutResident: (state) => {
      state.residentData = initialState.residentData;
      state.isVerified = initialState.isVerified;
      state.isQueueAdded = initialState.isQueueAdded;
      state.queueNo = initialState.queueNo;
    },
    logOutStaff: (state) => {
      state.isLoggedInStaff = initialState.isLoggedInStaff;
      state.isStaffChecked = initialState.isStaffChecked;
    },
    logOutAdmin: (state) => {
      state.isLoggedInAdmin = initialState.isLoggedInAdmin;
    },
    completeVoucher: (state) => {
      state.queueData = initialState.queueData;
      state.completedIssueVoucher = initialState.completedIssueVoucher;
      state.isCompleted = initialState.isCompleted;
    },

    completeRegister: (state) => {
      state.isRegisterCreated = initialState.isRegisterCreated;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state) => {
      state.isRegisterCreated = true;

      state.registerLoading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
    });
    builder.addCase(register.rejected, (state) => {
      state.registerLoading = false;
    });

    //staff verify resident
    builder.addCase(staffVerifyQueue.fulfilled, (state, { payload }) => {
      state.queueData = payload;

      if (payload) {
        state.isStaffChecked = true;
      }
      state.staffVerifyQueueLoading = false;
    });
    builder.addCase(staffVerifyQueue.pending, (state) => {
      state.staffVerifyQueueLoading = true;
    });
    builder.addCase(staffVerifyQueue.rejected, (state) => {
      state.staffVerifyQueueLoading = false;
    });

    //resident verify particulars

    builder.addCase(verifyResident.fulfilled, (state, { payload }) => {
      state.residentData = payload;
      if (payload) {
        state.isVerified = true;
      }
      state.verifyResidentLoading = false;
    });
    builder.addCase(verifyResident.pending, (state) => {
      state.verifyResidentLoading = true;
    });
    builder.addCase(verifyResident.rejected, (state) => {
      state.verifyResidentLoading = false;
    });

    //login admin
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      state.adminData = payload;
      if (payload) {
        state.isLoggedInAdmin = true;
      }
      state.loginAdminLoading = false;
    });
    builder.addCase(loginAdmin.pending, (state) => {
      state.loginAdminLoading = true;
    });
    builder.addCase(loginAdmin.rejected, (state) => {
      state.loginAdminLoading = false;
    });

    //login staff
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.staffData = payload;
      if (payload) {
        state.isLoggedInStaff = true;
      }
      state.loginLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.loginLoading = false;
    });

    //issue voucher
    builder.addCase(issueVoucher.fulfilled, (state, { payload }) => {
      state.completedIssueVoucher = payload;
      if (payload) {
        state.isCompleted = true;
      }

      state.issueVoucherLoading = false;
    });
    builder.addCase(issueVoucher.pending, (state) => {
      state.issueVoucherLoading = true;
    });
    builder.addCase(issueVoucher.rejected, (state) => {
      state.issueVoucherLoading = false;
    });

    //add Queue
    builder.addCase(addQueue.fulfilled, (state, { payload }) => {
      state.queueNo = payload;
      if (payload) {
        state.isQueueAdded = true;
      }

      state.addQueueLoading = false;
    });
    builder.addCase(addQueue.pending, (state) => {
      state.addQueueLoading = true;
    });
    builder.addCase(addQueue.rejected, (state) => {
      state.addQueueLoading = false;
    });
  },
});

// each case under reducers becomes an action

export const { logOutResident } = appSlice.actions;
export const { logOutStaff } = appSlice.actions;
export const { logOutAdmin } = appSlice.actions;
export const { completeVoucher } = appSlice.actions;
export const { completeRegister } = appSlice.actions;

export default appSlice.reducer;

export const useIsLoggedInAdmin = () =>
  useSelector((state) => state.appState.isLoggedInAdmin);

export const useIsLoggedInStaff = () =>
  useSelector((state) => state.appState.isLoggedInStaff);

export const useIsStaffChecked = () =>
  useSelector((state) => state.appState.isStaffChecked);

export const useIsVerified = () =>
  useSelector((state) => state.appState.isVerified);
export const useIsQueueAdded = () =>
  useSelector((state) => state.appState.isQueueAdded);

export const useAdmin = () => useSelector((state) => state.appState.adminData);

export const useStaff = () => useSelector((state) => state.appState.staffData);

export const useStaffVerifyQueue = () =>
  useSelector((state) => state.appState.queueData);

export const useVerifyResident = () =>
  useSelector((state) => state.appState.residentData);

export const useCompletedStatus = () =>
  useSelector((state) => state.appState.isCompleted);

//register complete status
export const useRegisterCreated = () =>
  useSelector((state) => state.appState.isRegisterCreated);

// complete issue voucher msg
export const useCompleteIssueVoucher = () =>
  useSelector((state) => state.appState.completedIssueVoucher);

//add queue
export const useQueue = () => useSelector((state) => state.appState.queueNo);
