// components/EmployeeTestimonial.tsx
import Image from "next/image";

export default function EmployeeTestimonial() {
  return (
    <div className="bg-emerald-50 rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
              <Image 
                src="/people/testimonial-employee.jpg" 
                width={48} 
                height={48} 
                alt="Employee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Maria Rodriguez</h3>
              <p className="text-sm text-gray-600">Senior Product Manager, 5 years</p>
            </div>
          </div>
          <blockquote className="text-lg text-gray-700 mb-6">
            "What I value most is our culture of continuous learning. The company invests in our growth through mentorship programs and skills development, while giving us opportunities to give back to communities through paid volunteer time."
          </blockquote>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-full bg-emerald-100">
          <Image 
            src="/people/testimonial-context.jpg" 
            fill
            alt="Employee at community event"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}