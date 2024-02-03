import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TrendChart from "@site/static/img/trends-chart.svg";
import TrendGraph from "@site/static/img/trends-graph.svg";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

const WeekView = require("@site/static/img/week.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={"hero__subtitle"}>{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="http://eepurl.com/g__xeb"
          >
            Sign up for beta
          </Link>
        </div>

        <WeekView />
      </div>
    </header>
  );
}

function UsefulForSection() {
  return (
    <section className={"container text-center py-10"}>
      <h2 className="font-medium text-xl">Useful for</h2>

      <div className="flex justify-center mt-1">
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Researchers
        </span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Writers
        </span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Designers
        </span>
      </div>

      <div className="flex justify-center">
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Product Managers
        </span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Lawyers
        </span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Developers
        </span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Students
        </span>
      </div>

      <div className="flex justify-center">
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">CEOs</span>
        <span className="flex-initial bg-gray-200 p-2 m-1 rounded">
          Freelancers
        </span>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <div className="min-w-full bg-gray-100 mt-8 pt-8">
      <div class="container pb-10 pt-10">
        <div class="w-full lg:w-3/4 mx-auto relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="col-span-4">
              <p class="text-3xl xl:text-4xl font-semibold">Time well spent</p>
              <p class="text-zinc-600 mt-4 text-lg leading-relaxed">
                <b class="text-bold text-black">2x productivity</b> by
                understanding how you spend your activities.
              </p>
            </div>
            <div class="col-span-8">
              <TrendChart class="h-[375px]" />
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-10 pt-10">
        <div class="w-full lg:w-3/4 mx-auto relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="col-span-4">
              <p class="text-3xl xl:text-4xl font-semibold">
                Understand your habits
              </p>
              <p class="text-zinc-600 mt-4 text-lg leading-relaxed">
                Use your calendar to help you form and review habits to stay
                consistent with your goals.
              </p>
            </div>
            <div class="col-span-8">
              <TrendGraph class="h-[375px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <UsefulForSection />
      </main>
    </Layout>
  );
}
