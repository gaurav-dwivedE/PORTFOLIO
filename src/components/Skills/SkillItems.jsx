const SkillItem = ({ icon, color, title, level }) => {
  return (
    <div className="flex items-center gap-2">
      <i className={`bx ${icon} text-lg md:text-2xl ${color}`}></i>
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
    </div>
  );
};

export default SkillItem;
