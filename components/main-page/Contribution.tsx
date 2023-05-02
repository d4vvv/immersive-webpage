import { ContributionItem } from './ContributionItem'

export const Contribution: React.FC = () => {
  return (
    <section className='max-w-[1100px] mx-auto pt-32'>
      <p className='lg:text-[40px] text-[28px] font-Dela text-center pb-16 px-4'>
        OUR SCIENTIFIC CONTRIBUTION AND KNOW-HOW
      </p>
      <div className='w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto max-lg:text-center flex flex-col gap-8'>
        <ContributionItem
          title='MARS:'
          subTitle='A Cross-Platform Mobile AR System for Remote Collaborative Instruction and Installation Support using Digital Twins'
          description='This paper describes a multi-user, mobile, cross-platform AR system that allows real-time remote collaboration utilizing the digital twinning concept. Thanks to cloud services, the users can collab-oratively manipulate and exchange information using digital twin realized as detailed multi-part 3D models. We also discuss design requirements and task analysis captured using engineering design methodology and the usability verification of our system using a heuristical approach.'
          authors='S. K. Tadeja, D. Janik, P. Stachura, M. Tomecki, K. Książczak and K.
          Walas, "MARS: A Cross-Platform Mobile AR System for Remote
          Collaborative Instruction and Installation Support using Digital
          Twins," 2022 IEEE Conference on Virtual Reality and 3D User
          Interfaces Abstracts and Workshops (VRW), 2022, pp. 373-380, doi:
          10.1109/VRW55335.2022.00083.'
          link='https://ieeexplore.ieee.org/document/9757630'
        />
        <ContributionItem
          title='Design of ARQ:'
          subTitle='An Augmented Reality System for Assembly Training Enhanced with QR-Tagging and 3D Engineering Asset Model'
          description='The object assembly process is frequently carried out throughout the lifespan of an asset. To prevent asset damage, it is necessary to perform adequate training to ensure process efficiency and appropriate asset handling. Thus, the industry constantly seeks better training solutions to reduce costs and maximize efficiency in the assembly task. Here, we present an augmented reality system to aid these efforts by using QR-tagging and 3D models. Moreover, we describe the system design using an engineering design methodology.'
          authors='S. K. Tadeja, D. Janik, P. Stachura, M. Tomecki and K. Walas, "Design of ARQ: An Augmented Reality System for Assembly Training Enhanced with QR-Tagging and 3D Engineering Asset Model," 2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), 2022, pp. 466-471, doi: 10.1109/VRW55335.2022.00103.'
          link='https://ieeexplore.ieee.org/document/9757639'
        />
        <ContributionItem
          title='Showcasing Mobile MRI:'
          subTitle='Towards More Effective VR-Based Presentations of Real-World Assets: Showcasing Mobile MRI to Medical Practitioners and Technicians'
          description='The main aim of this research is to examine the benefits of using VR to present mobile MRI. Even though such devices were specifically designed for mobility, it is still often unfeasible to transport them across long distances. Hence, new methods are required that help familiarize potential patients and medical personnel with the advan-tages and shortcomings of mobile MRI. To do this, we developed a system that transports the user to the VR environment populated with the real-scale MRI model.'
          authors='S. Tadeja, K. Godula, A. Cybulski, T. Bohné and M. Woźniak, "Towards More Effective VR-Based Presentations of Real-World Assets: Showcasing Mobile MRI to Medical Practitioners and Technicians," 2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), Shanghai, China, 2023, pp. 183-186, doi: 10.1109/VRW58643.2023.00045.'
          link='https://ieeexplore.ieee.org/document/10108708'
        />
      </div>
    </section>
  )
}
