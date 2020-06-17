const pg = require('pg');
require('dotenv').config({ path: '../.env' });
const connectionString = process.env.DATABASE_URL;

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  `CREATE TABLE public.users (
          id integer NOT NULL,
          company character varying(255) NOT NULL,
          email character varying(255) NOT NULL,
          creation_date date NOT NULL,
          last_payment date,
          password character varying(255) NOT NULL,
          url character varying(255),
          rules character varying(255)
      );
      ALTER TABLE public.users OWNER TO postgres;

      CREATE SEQUENCE public.users_id_seq
          AS integer
          START WITH 1
          INCREMENT BY 1
          NO MINVALUE
          NO MAXVALUE
          CACHE 1;

      ALTER TABLE public.users_id_seq OWNER TO postgres;

      ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

      ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);

      SELECT pg_catalog.setval('public.users_id_seq', 1, false);

      ALTER TABLE ONLY public.users
          ADD CONSTRAINT users_pkey PRIMARY KEY (id);
  `,
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
    client.end();
  }
);
