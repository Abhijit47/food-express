import { HeroiconsOutlineBadgeCheck } from "@/assets/icons";
import { classNames } from "@/lib/helpers";
import Link from "next/link";

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Startup",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

export default function PriceCard() {
  return (
    <div className="mx-auto max-w-7xl bg-white px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Pricing plans for teams of all sizes
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Choose an affordable plan that&apos;s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex cursor-pointer flex-col rounded-2xl border border-amber-200 bg-white p-8 shadow-lg transition-all delay-75 duration-500 ease-in-out hover:-translate-y-4"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-amber-600">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-amber-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-amber-600">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-amber-500">{tier.description}</p>

              {/* Feature list */}
              <ul className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <HeroiconsOutlineBadgeCheck
                      className="h-6 w-6 flex-shrink-0 text-amber-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-amber-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#"
              className={classNames(
                tier.mostPopular
                  ? "bg-amber-500 text-white hover:bg-amber-600"
                  : "bg-amber-50 text-amber-700 hover:bg-amber-100",
                "mt-8 block w-full rounded-md border border-transparent px-6 py-3 text-center font-medium",
              )}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
