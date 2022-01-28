export const getValueFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getValueFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
