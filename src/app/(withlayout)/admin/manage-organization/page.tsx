import BreadCrumb from '@/components/shared/BreadCrumb';
import { useDeleteOrganizationMutation, useGetAllOrganizationQuery } from '@/redux/api/organizationApi';
import { useDebounced } from '@/redux/hooks';
import React, { useState } from 'react'

function OrganizationPage() {
    const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteHotel] = useDeleteOrganizationMutation();
  query["limit"] = limit;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllOrganizationQuery({ ...query });
  if (isLoading) {
    return <p>Loading..........</p>;
  }

   //@ts-ignore
   const hotels = data?.hotel;
   //@ts-ignore
   const meta = data?.meta;
   const handleDelete = (id: string) => {
    deleteHotel(id);
  };
  const columns: any = [
    { id: "name", label: "Organization Name" },
    { id: "image", label: "Organization Image" },
    { id: "availableEvent", label: "AvailableEvent" },
    { id: "admin", label: "Admin Name" },
    { id: "createdAt", label: "Created At" },
    { id: "action", label: "Action" },
  ];

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
        <BreadCrumb
         items={[
            {
              label: "Admin",
              link: "/admin",
            },
          ]}
        />
    </div>
  )
}

export default OrganizationPage;