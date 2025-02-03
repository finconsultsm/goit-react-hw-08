import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contacts;

export const selectFilteredContacts = createSelector(
  [getContacts, (state) => state.filter.query],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
