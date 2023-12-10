import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageOpen:false,
  selectedMail:null,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageOpen = false;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    }
  },

});

export const { openSendMessage,closeSendMessage ,setSelectedMail } = mailSlice.actions;

export const selectMail = (state) => state.mail.sendMessageOpen;
export const mail = (state) => state.mail.selectedMail;


export default mailSlice.reducer;
