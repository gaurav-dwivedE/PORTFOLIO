import SkillItem from "./SkillItems";

const Coursework = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-gray-200/60 
                    p-4 md:p-5 rounded-xl shadow-xl max-w-[350px] sm:max-w-[300px] 
                    w-full hover:border-white/70 transition-all duration-300 mx-auto">
      <h3 className="text-lg font-medium text-center mb-6">
        Coursework & Tools
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        {/* First Column */}
        <div className="grid gap-4">
          <SkillItem
            icon="bxl-python"
            color="text-blue-500"
            title="Python"
            level="Intermediate"
          />
          <SkillItem
            icon="bxl-c-plus-plus"
            color="text-indigo-500"
            title="C++"
            level="Basic"
          />
          <SkillItem
            icon="bxl-java"
            color="text-red-500"
            title="Java"
            level="Basic"
          />
        </div>

        {/* Second Column */}
        <div className="grid gap-4">
          <SkillItem
            icon="bxl-gitlab"
            color="text-orange-500"
            title="GitLab"
            level="Basic"
          />
          <SkillItem
            icon="bxl-visual-studio"
            color="text-purple-500"
            title="VS Code"
            level="Intermediate"
          />
          <SkillItem
            icon="bxl-github"
            color="text-gray-800"
            title="GitHub"
            level="Intermediate"
          />
        </div>
      </div>
    </div>
  );
};

export default Coursework;
