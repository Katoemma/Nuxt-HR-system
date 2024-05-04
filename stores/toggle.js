import { defineStore } from "pinia";

export const useMyToggleStore = defineStore("myToggleStore", {
  state: () => ({
    isNotificationHidden: true,
    isSidebarHidden: false,
    activeEmployeeTab:'personal info'
  }),
  actions: {
    toggleNotification() {
      this.isNotificationHidden = !this.isNotificationHidden; // toggle the state
    },
    //toggle sidebar
    toggleSidebar() {
      this.isSidebarHidden = !this.isSidebarHidden; // toggle the state
    },

    //set active tab
    setActiveTab(tabName){
      this.activeEmployeeTab = tabName;
    }
    
  },
});
