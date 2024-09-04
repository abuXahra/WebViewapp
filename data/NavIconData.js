{
  NavIconData.map((item, i) => (
    <TouchableOpacity key={i} onPress={() => handleIconPress(item.title)}>
      <Icon name={item.title} size={30} style={styles.icon} />
    </TouchableOpacity>
  ));
}

export const NavIconData = [
  {
    title: arrow - left,
  },
  {
    title: arrow - right,
  },
  {
    title: refresh,
  },
  {
    title: phone,
  },
  {
    title: whatsapp,
  },
];
