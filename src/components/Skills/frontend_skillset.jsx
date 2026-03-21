import SkillItem from "./SkillItems";

const Frontend = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-gray-200/60 
                    p-4 md:p-5 rounded-xl shadow-xl max-w-[350px] sm:max-w-[300px] 
                    w-full hover:border-white/70 transition-all duration-300 mx-auto">
      <h3 className="text-lg font-semibold text-center mb-6">
        Frontend Developer
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* First Column */}
        <div className="grid gap-4">
          <SkillItem
            icon="bxl-html5"
            color="text-orange-600"
            title="HTML"
            level="Basic"
          />
          <SkillItem
            icon="bxl-css3"
            color="text-blue-500"
            title="CSS"
            level="Advanced"
          />
          <SkillItem
            icon="bxl-javascript"
            color="text-yellow-500"
            title="JavaScript"
            level="Intermediate"
          />
          <SkillItem
            icon="bxs-data"
            color="text-purple-500"
            title="MySQL"
            level="Basic"
          />
          <SkillItem
            icon="bxl-typescript"
            color="text-blue-600"
            title="TypeScript"
            level="Basic"
          />
        </div>

        {/* Second Column */}
        <div className="grid gap-4">
          <SkillItem
            icon="bxl-bootstrap"
            color="text-indigo-500"
            title="Bootstrap"
            level="Intermediate"
          />
          <SkillItem
            icon="bxl-git"
            color="text-red-500"
            title="Git"
            level="Intermediate"
          />
          <SkillItem
            icon="bxl-react"
            color="text-cyan-500"
            title="React"
            level="Basic"
          />
          <SkillItem
            icon="bxl-nodejs"
            color="text-green-600"
            title="Node Js"
            level="Basic"
          />
          <SkillItem
            icon="bxl-tailwind-css"
            color="text-blue-400"
            title="Tailwind CSS"
            level="Basic"
          />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
